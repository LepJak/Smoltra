using Smoltra.Application.Common.Interfaces;
using Smoltra.Application.Common.Interfaces.Repositories;
using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Infrastructure.Persistence.Repositories
{
    public class SpecificationRepository : GenericRepository<ProductSpecification>, ISpecificationRepository
    {
        public SpecificationRepository(ISmoltraDbContext context) : base(context)
        {
        }
    }
}
