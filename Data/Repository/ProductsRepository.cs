using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Helpers;
using Data.Models;
using Newtonsoft.Json;

namespace Data.Repository
{
    public static class ProductsRepository
    {
        public static List<Product> GetProducts()
        {
            //This is where you would get your data from a database.
            //To keep this project simple, the data are loaded from JSON files

            var path = AppDomain.CurrentDomain.BaseDirectory + @"JsonData\Products.json";

            var productsString = FileHelper.LoadStringFromFile(path);

            List<Product> products = JsonConvert.DeserializeObject<List<Product>>(productsString);

            return products;
        }

    }
}
