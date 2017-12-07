using System;
using System.Collections.Generic;


namespace lifeauthor.Models

{

    public class Agenda : BaseEntity

    {

        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string category { get; set; }
        public int importance { get; set; }
        public int urgency { get; set; }
        public DateTime start { get; set; }
        public DateTime end { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
        

    }

}