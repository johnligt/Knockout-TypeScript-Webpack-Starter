using System.Collections.Generic;
using System.Web.Http;
using Data.Models;

namespace Web.Controllers.api
{
    public class PricesController : ApiController
    {
        [HttpGet]
        public IEnumerable<Price> Get() 
        {
            return Data.Repository.PricesRepository.GetPrices();
        } 
    }
}
