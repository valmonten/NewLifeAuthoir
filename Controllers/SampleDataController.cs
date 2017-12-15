using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lifeauthor.Models;
using Microsoft.EntityFrameworkCore;

namespace lifeauthor.Controllers
{

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private lifeauthorContext _context;
        public SampleDataController(lifeauthorContext context)
        {
            _context= context;
        }
        
     [HttpGet("[action]")]
        public Calendar CalendarData()
        {   var mydate = DateTime.Today;
            Calendar mycalendar = _context.calendar_table.Where(a=>a.dt == mydate ).SingleOrDefault();
            
            //var mydate1 = DateTime.Today.AddDays(-1);
            //Calendar mycalendar1 = _context.calendar_table.Where(b=>b.dt == mydate1).SingleOrDefault();

           
            return mycalendar;

            
        }

        [HttpGet("[action]")]
        public int[] TheWeek(){

            int[] weekdays = new int[7];

            var todayy = DateTime.Today;
            Calendar mytoday = _context.calendar_table.Where(a=>a.dt == todayy).SingleOrDefault();

            int todaysid = mytoday.calendarid;

            int todaysdw = mytoday.dw;
            int ytd = todaysid -(todaysdw-1);

            for( int i=0; i<weekdays.Length; i++){
                int day = ytd + i;
                weekdays[i] = day;
                System.Console.WriteLine(weekdays[i].ToString(), "1");

            }

            System.Console.WriteLine( todaysdw.ToString());
            System.Console.WriteLine( todaysid.ToString());
            System.Console.WriteLine(string.Join(',',weekdays));



            return weekdays;

        }

        [HttpGet("[action]")]

        public DateTime[] DayOfWeek()
        {   int[] days = TheWeek();
            DateTime[] datedays = new DateTime[7];
            for(int k=0; k<days.Length; k++){
                int test = days[k];
                Calendar eachday = _context.calendar_table.Where(a=>a.calendarid == test).SingleOrDefault();
                datedays[k] = eachday.dt;
                
            }
            System.Console.WriteLine(string.Join(',',days));
            return datedays;
            
        }

        [HttpGet("[action]")]
        public User Usersdata()
        {
            User firstuser = _context.users.Where(User=>User.id == 1).SingleOrDefault();
            return firstuser;
        }

        [HttpGet("[action]")]
        public Note NoteData()
        {
            Note myentries = _context.notes.Where(J=>J.idnotes == 1).SingleOrDefault();
            return myentries;
        }

        [HttpGet("[action]")]
        public Journal JournalData()
        {
            Journal myjournals = _context.journals.Where(a=>a.idjournals == 2).SingleOrDefault();
            return myjournals;
        }
        
    }
}
