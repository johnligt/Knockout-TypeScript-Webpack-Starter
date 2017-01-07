using System.Collections.Generic;
using System.Web.Http;
using Data.Models;

namespace Web.Controllers.api
{
    public class LabelsController : ApiController
    {
        [HttpGet]
        public IEnumerable<Label> Get()
        {
            return Data.Repository.LabelsRepository.GetLabels();
        } 
    }
}