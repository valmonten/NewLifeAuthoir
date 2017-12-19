using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lifeauthor.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.Serialization.Json;
using System.IO;


namespace lifeauthor.Controllers
{

    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public DateTime todayy = DateTime.Today;
        // MemoryStream ms = new MemoryStream();
        // DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(Journal));
        private lifeauthorContext _context;
        public SampleDataController(lifeauthorContext context)
        {
            _context= context;
        }
        
        //get this week's info
     [HttpGet("[action]")]
        public Calendar CalendarData()
        {   var mydate = DateTime.Today;
            Calendar mycalendar = _context.calendar_table.Where(a=>a.dt == mydate ).SingleOrDefault();
            
            //var mydate1 = DateTime.Today.AddDays(-1);
            //Calendar mycalendar1 = _context.calendar_table.Where(b=>b.dt == mydate1).SingleOrDefault();

           
            return mycalendar;

            
        }

          //get the id corresponding to this week 
        [HttpGet("[action]")]
        
        public int[] TheWeek(){
            
            int[] weekdays = new int[7];
            
            Calendar mytoday = _context.calendar_table.Where(a=>a.dt == todayy).SingleOrDefault();

            int todaysid = mytoday.calendarid;

            int todaysdw = mytoday.dw;
            int ytd = todaysid -(todaysdw-1);

            for( int i=0; i<weekdays.Length; i++){
                int day = ytd + i;
                weekdays[i] = day;

            }
            return weekdays;

        }

        //change days to day-7 when i click prev button
    //    [HttpGet("[action]")]
    //    public int[] PrevWeek(){
    //        //create a new array
    //        int[] curweeks = TheWeek();
    //         int[] prevweeks = new int[7];
    //        //loop through it
    //        for(int j=0; j<curweeks.Length; j++){
    //            //remov 7 to the values at each index, 
    //            //save it to the new array 
    //            prevweeks[j]= (curweeks[j] - 7);

    //        }
    //         System.Console.WriteLine("------------------------------------------------------");
    //         System.Console.WriteLine("hello"  + string.Join(',',prevweeks));
    //         System.Console.WriteLine("------------------------------------------------------");


    //        return prevweeks;
    //    }

        

        //change days to day+7 what i click next button
        //when button is clicked, if prev change todayy to todayy -7
        //call theweek function, call dayofweek function
        //change 

        //print days corresponding to values in current weekdays array
        [HttpGet("[action]")]

        public DateTime[] DayOfWeek()
        {   int[] days = TheWeek();
            DateTime[] datedays = new DateTime[7];
            for(int k=0; k<days.Length; k++){
                int test = days[k];
                Calendar eachday = _context.calendar_table.Where(a=>a.calendarid == test).SingleOrDefault();
                datedays[k] = eachday.dt;
                
            }
            //System.Console.WriteLine(string.Join(',',days));
            return datedays;
            
        }



        [HttpGet("[action]")]
        public User Usersdata()
        {
            User firstuser = _context.users.Where(User=>User.id == 1).SingleOrDefault();
            return firstuser;
        }

        [HttpGet("[action]")]
        public String[] NoteData()
        {
            int[] dailynote = TheWeek();
            String[] mynotes = new String[7];
            for(int k=0; k<dailynote.Length; k++){
                int test = dailynote[k];
            Note notes = _context.notes.Where(a=>a.calendarid == test).SingleOrDefault();
            mynotes[k]= notes.mynotes;  
            }
            
            return mynotes;
        }

        [HttpGet("[action]")]
        public String[] JournalData()
        {
            int[] dailyjournal = TheWeek();
            String[] myjournals = new String[7];
            for(int k=0; k<dailyjournal.Length; k++){
                int test = dailyjournal[k];
            Journal journals = _context.journals.Where(a=>a.calendarid == test).SingleOrDefault();
            myjournals[k]= journals.contents;  
            }
            
            return myjournals;
        }

        [HttpPost("[action]")]  
        public IActionResult Save([FromBody] object[] data)  
        {       
                
                bool isNew = false;
                Calendar something = _context.calendar_table.Where(p => p.dt == (DateTime)data[1] ).FirstOrDefault();
                Journal plan = _context.journals.Where(k => k.calendarid == something.calendarid ).FirstOrDefault();
                if( plan == null){
                    plan = new Journal();
                    isNew = true;
                }
                    plan.contents = (string)data[0];
                    plan.calendarid = something.calendarid;
                    plan.users_id = 1;  
                    plan.updated_at = DateTime.Now;  
                
                if (isNew){
                    plan.created_at = DateTime.Now;
                   _context.journals.Add(plan); 
                }
                 
                _context.SaveChanges();
                return Ok(plan); 
            
        } 







                //prev week

//         [HttpGet("[action]")]
//         public int[] PrevWeek(){

//             int[] prevweekdays = new int[7];
//             var prevday = todayy.AddDays(-7);

//             Calendar prevtoday = _context.calendar_table.Where(a=>a.dt == prevday ).SingleOrDefault();

//             int todaysidprev = prevtoday.calendarid;

//             int todaysdwprev = prevtoday.dw;
//             int ytdprev = todaysidprev -(todaysdwprev-1);

//             for( int i=0; i<prevweekdays.Length; i++){
//                 int dayprev = ytdprev + i;
//                 prevweekdays[i] = dayprev;

//             }
//             return prevweekdays;

//         }
// //next week
//         [HttpGet("[action]")]
//         public int[] NextWeek(){

//             int[] nextweekdays = new int[7];
//             var nextday = todayy.AddDays(+7);

//             Calendar nexttoday = _context.calendar_table.Where(a=>a.dt == nextday ).SingleOrDefault();

//             int todaysidnext = nexttoday.calendarid;

//             int todaysdwnext = nexttoday.dw;
//             int ytdnext = todaysidnext -(todaysdwnext-1);

//             for( int i=0; i<nextweekdays.Length; i++){
//                 int daynext = ytdnext + i;
//                 nextweekdays[i] = daynext;

//             }
//             return nextweekdays;

//         }

        
    }
}
