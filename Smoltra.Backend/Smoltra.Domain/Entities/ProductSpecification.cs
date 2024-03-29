﻿using Smoltra.Domain.Common;
using Smoltra.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Smoltra.Domain.Entities
{
    public class ProductSpecification : BaseAuditableEntity
    {
        public string? Name { get; set; }
        public string? Value { get; set; }
        public ProductSpecificationGroup? SpecificationGroup { get; set; }
        public Guid? ProductSpecificationGroupId { get; set; }
       // public List<SpecificationValue>? SpecificationValues { get; set; } = new List<SpecificationValue>();
        public Guid? DataTypeId { get; set; }
        public UnitsOfMeasurement? UnitsOfMeasurement { get; set; }
        public Guid? UnitsOfMeasurementId { get; set; }
    }
}
