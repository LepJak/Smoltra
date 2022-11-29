using Smoltra.Domain.Common;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class SpecificationVariant : BaseEntity
    {
        public string? Name { get; set; }
        public string? Title { get; set; }
        public SpecificationGroupVariant? SpecificationGroupVariant { get; set; }
        public Guid SpecificationGroupVariantId { get; set; }
        public DataType DataTypeValue { get; set; } = DataType.String;
        public UnitsOfMeasurement? UnitsOfMeasurement { get; set; }
        public Guid UnitsOfMeasurementId { get; set; }
    }
}
