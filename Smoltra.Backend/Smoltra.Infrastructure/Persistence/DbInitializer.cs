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
            //TODOчинить эту х 
        }
    }
}
