using Newtonsoft.Json;

namespace Data.Models
{
    public class Price
    {
        [JsonProperty(PropertyName = "productId")]
        public int ProductId { get; set; }
        
        [JsonProperty(PropertyName = "productDefaultPrice")]
        public double ProductDefaultPrice { get; set; }

        [JsonProperty(PropertyName = "productDiscountPrice")]
        public string ProductDiscountPrice { get; set; }

         [JsonProperty(PropertyName = "productSuperDiscountPrice")]
        public string ProductSuperDiscountPrice { get; set; }
       
    }
}