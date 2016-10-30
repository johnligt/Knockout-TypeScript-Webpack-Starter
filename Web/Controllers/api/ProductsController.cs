using System.Collections.Generic;
using System.Web.Http;
using Data.Models;

namespace Web.Controllers.api
{
    public class ProductsController : ApiController
    {
         [HttpGet]
        public IEnumerable<Product> Get() 
        {
            return Data.Repository.ProductsRepository.GetProducts();
        } 
    }
}
