using Smoltra.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Infrastructure.Persistence
{
    public class DbInitializer
    {
        public static void Initialize(SmoltraDbContext context)
        {
            context.Database.EnsureCreated();
        }
        public static void Seed(SmoltraDbContext context)
        {

            if (!context.Products.Any())
            {
                var specGroup = new ProductSpecificationGroup
                {
                    ProductSpecifications = new List<ProductSpecification>
                    {
                        new ProductSpecification
                        {
                            Name = "Ширина",
                            UnitsOfMeasurement = new UnitsOfMeasurement
                            {
                                Name ="сантиметры",
                                ShortName ="см"
                            },
                            //SpecificationValues = new List<SpecificationValue>
                            //{
                            //    new SpecificationValue
                            //    {
                            //        Name = "1000"
                            //    }
                            //}
                        }
                    }
                };
                var category = context.Categories.Add(new Category()
                {
                    Name = "Трактор"
                });

                var image1 = context.ProductImages.Add(new()
                {
                    Id = new Guid("832E0CC2-3FEE-4698-9DE5-D0A266D73D73")
                });
                var image2 = context.ProductImages.Add(new()
                {
                    Id = new Guid("832E0CC3-3FEE-4698-9DE5-D0A266D73D73")
                });
                //var imageSet =context.Ima ImageSet
                context.SaveChanges();
                var products = new List<Product>()
                {
                    new()
                    {
                        Name= "Трактор Беларус МТЗ 1221.2",
                        Description="Трактор МТЗ-1221 с тропическим радиатором и дополнительным баком предназначен для выполнения различных сельскохозяйственных работ с навесными, полунавесными и прицепными машинами и орудиями, работ на транспорте.\r\n\r\nОтличительные особенности: передний ведущий мост с планетарно-цилиндрическими конечными передачами. Комплектация по заказу: коробка передач механическая, ступенчатая, синхронизированная (24/12). Механический ходоуменьшитель. Дизель по выбросам вредных веществ соответствует экологическим требованиям ступени Tier I, реверсивный пост управления (1221В.2). Передний ВОМ. Переднее навесное устройство. Шланг сцепки (2 шт.). Правосторонняя подножка кабины. Балласт передний общей массой до 1025 кг.",
                        GeneralImageForProduct = new GeneralImageForProduct{ImageId =  image1.Entity.Id },
                        Price = 1_000_000,
                        Category = category.Entity,
                        Images = new List<Image>
                            {
                                image1.Entity,
                                image2.Entity

                            }
                        ,
                        SpecificationGroups = new List<ProductSpecificationGroup>{ specGroup }

                    },
                    new()
                    {
                        Name= "Трактор Беларус МТЗ 1221.3",
                        Description="Магазин Smoltra предлагает клиентам купить трактор МТЗ-1221. 3 Это машина второго тягового класса. В качестве силового агрегата использован дизельный двигатель серии S, мощностью 100 кВт (130 л. с.).\r\n\r\nТрактор МТЗ-1221 предназначен для проведения сельскохозяйственных работ. Для чего машину оснащают навесным оборудованием. Есть возможность установки полунавесных и прицепных агрегатов. Для тех, кто купил трактор МТЗ-1221, в ассортименте представлены погрузочно-разгрузочные и специализированные уборочные приспособления. Комплектация зависит от пожеланий клиента.",
                        GeneralImageForProduct =  new GeneralImageForProduct{ImageId = image2.Entity.Id },
                        Price = 1_300_000,
                        Category = category.Entity
                    }
                };


                context.Products.AddRange(products);
                context.SaveChanges();

            }
        }
    }
}
