using System;
using System.Collections.Generic;
using Data.Helpers;
using Data.Models;
using Newtonsoft.Json;

namespace Data.Repository
{
    public static class PricesRepository
    {
        public static IEnumerable<Price> GetPrices()  
        {
            //This is where you would get your data from a database.
            //To keep this project simple, the data are loaded from JSON files

            var path = AppDomain.CurrentDomain.BaseDirectory + @"JsonData\Prices.json";

            var pricesString = FileHelper.LoadStringFromFile(path);

            List<Price> prices = JsonConvert.DeserializeObject<List<Price>>(pricesString);

            return prices;
        }

    }
}