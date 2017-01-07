using System;
using System.Collections.Generic;
using Data.Helpers;
using Data.Models;
using Newtonsoft.Json;

namespace Data.Repository
{
    public static class LabelsRepository 
    {
        public static IEnumerable<Label> GetLabels()  
        {
            //This is where you would get your data from a database or CMS.
            //To keep this project simple, the data are loaded from JSON files

            var path = AppDomain.CurrentDomain.BaseDirectory + @"JsonData\Labels.json";

            var labelsString = FileHelper.LoadStringFromFile(path); 

            List<Label> labels = JsonConvert.DeserializeObject<List<Label>>(labelsString);

            return labels;
        }
    }
}