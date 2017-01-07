using Newtonsoft.Json;

namespace Data.Models
{
    public class Product
    {
        [JsonProperty(PropertyName = "productId")]
        public int ProductId { get; set; }

        [JsonProperty(PropertyName = "productName")]
        public string ProductName { get; set; }

        [JsonProperty(PropertyName = "productPrice")]
        public double ProductPrice { get; set; }
        
        [JsonProperty(PropertyName = "isSelected")]
        public bool IsSelected { get; set; }
    }
}