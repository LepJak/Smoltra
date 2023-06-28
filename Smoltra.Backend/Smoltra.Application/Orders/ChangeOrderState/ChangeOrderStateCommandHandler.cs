using AutoMapper;
using MediatR;
using Smoltra.Application.Common.Exceptions;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Application.Orders.Queries.GetOrderDetails;
using Smoltra.Domain.Entities;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Application.Orders.ChangeOrderState
{
    internal class ChangeOrderStateCommandHandler : IRequestHandler<ChangeOrderStateCommand, Unit>
    {
        public ChangeOrderStateCommandHandler(IOrderRepository orderRepository,
            IMapper mapper
            )
            => (_orderRepository, _mapper)
            = (orderRepository, mapper);

        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public async Task<Unit> Handle(ChangeOrderStateCommand request,
            CancellationToken cancellationToken)
        {
            var order = await _orderRepository.GetByIdAsync(request.OrderId, cancellationToken);
            if(order == null)
                throw new NotFoundException(nameof(Order), request.OrderId);

            order.State = (OrderState)request.NewState;
            var status = GetStatus(request.NewState);
            await SendEmail(order.Email, status, order.Id);
            await _orderRepository.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
        public string GetStatus(int id)
        {
            switch (id)
            {
                case 1:
                    return "Ожидает подтверждения";
                case 3:
                    return "В работе";
                case 2:
                    return "Ожидает оплаты";
                case 4:
                    return "Ожидает получения";
                case 5:
                    return "Завершён";

                default:
                    return "Ожидает подтверждения";
            }
        }
        public async Task<bool> SendEmail(string toAdress,string status, Guid orderId)
        {
            try
            {
                var message = GetMailMessage(toAdress);
                message.Body = $"Cтатус заказа №{orderId} изменился на: {status}";
                message.BodyEncoding = System.Text.Encoding.UTF8;
                message.IsBodyHtml = true;
                message.Subject = "Подтверждение пароля";
                message.SubjectEncoding = System.Text.Encoding.UTF8;
                await SendEmailAsync(message);
                return true;
            }
            catch
            {
                return false;
            }

        }
        private MailMessage GetMailMessage(string to)
        {
            MailAddress from = new MailAddress("evgeny.kuprienko2003@yandex.ru");
            var toAddress = new MailAddress(to);
            var message = new MailMessage(from, toAddress);
            return message;
        }
        private async Task SendEmailAsync(MailMessage message)
        {
            var smtpClient = new SmtpClient("smtp.yandex.ru", 587)
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential("evgeny.kuprienko2003", "uubvovcalejianfz"),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network

            };
            await smtpClient.SendMailAsync(message);
            message.Dispose();

        }
    }
}
