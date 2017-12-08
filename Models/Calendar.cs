using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace lifeauthor.Models

{

    public class Calendar : BaseEntity

    {
        [Key]
        public int DateId { get; set; } 
        public DateTime dt { get; set; }
        public int y { get; set; }
        public int q { get; set; }
        public int m { get; set; }
        public int d { get; set; }
        public int dw { get; set; }
        public string monthName { get; set; }
        public string dayName { get; set; }
        public int w { get; set; }
        


    }

}