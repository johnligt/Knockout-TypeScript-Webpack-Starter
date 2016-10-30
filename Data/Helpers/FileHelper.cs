using System.IO;

namespace Data.Helpers
{
    public static class FileHelper
    {
        public static string LoadStringFromFile(string filePath)
        {
            using (StreamReader reader = new StreamReader(filePath))
            {
                string content = reader.ReadToEnd();
                return content;
            }
        }
    }
}
