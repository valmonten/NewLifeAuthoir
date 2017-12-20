using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lifeauthor.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.Serialization.Json;
using System.IO;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;


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



    // as i click the button, grab data,save it to session, data comes in as object from ts file
    [HttpPost("[action]")]
    public IActionResult ForwardSetter([FromBody] object[] changedate)
    {
        Calendar something = _context.calendar_table.Where(p => p.dt == (DateTime)changedate[0] ).FirstOrDefault();  
        var updater = something.calendarid;
        var updater2 = updater + 7;
        Calendar something2 = _context.calendar_table.Where(p => p.calendarid == updater2 ).FirstOrDefault();
        var updater3 = something2.dt;

        HttpContext.Session.SetObjectAsJson("todayy", updater3);
        // Console.WriteLine(HttpContext.Session.GetObjectFromJson<DateTime>("todayy"));
        // Console.WriteLine("updater3 is" + updater3);
        
        return Ok(updater3);
    }

    [HttpPost("[action]")]
    public IActionResult BackwardSetter([FromBody] object[] changedate)
    {
        Calendar something = _context.calendar_table.Where(p => p.dt == (DateTime)changedate[0] ).FirstOrDefault();  
        var updater = something.calendarid;
        var updater2 = updater - 7;
        Calendar something2 = _context.calendar_table.Where(p => p.calendarid == updater2 ).FirstOrDefault();
        var updater3 = something2.dt;

        HttpContext.Session.SetObjectAsJson("todayy", updater3);
        // Console.WriteLine(HttpContext.Session.GetObjectFromJson<DateTime>("todayy"));
        // Console.WriteLine("updater3 is" + updater3);
        
        return Ok(updater3);
        
        

        // DateTime forward = changedate.AddDays(7);
        // HttpContext.Session.SetObjectAsJson("todayy", forward);
        // return forward;


        // DateTime toprint;
        // string iDate = "1/1/0001 12:00:00 AM";
        // DateTime oDate = Convert.ToDateTime(iDate);
        // System.Console.WriteLine(today);
        // if(HttpContext.Session.GetObjectFromJson<DateTime>("todayy") == oDate)
        //     {
        //         HttpContext.Session.SetObjectAsJson("todayy", today);
                
        //     }
        // else{  toprint = HttpContext.Session.GetObjectFromJson<DateTime>("todayy");

        
        // }
    
        // return toprint;
    }

    [HttpGet("[action]")]
    public DateTime TheGetter()
    {
        string iDate = "1/1/0001 12:00:00 AM";
        DateTime oDate = Convert.ToDateTime(iDate);
        DateTime ndatevar = DateTime.Today;
        // DateTime datevar = HttpContext.Session.GetObjectFromJson<DateTime>("todayy");
        if(HttpContext.Session.GetObjectFromJson<DateTime>("todayy") == oDate)
            {
                return ndatevar;
            }
        else{
                ndatevar = HttpContext.Session.GetObjectFromJson<DateTime>("todayy");
                Console.WriteLine(ndatevar);
                return ndatevar;
            }
   
        
    }
    
        
        //get this week's info
    [HttpGet("[action]")]
        public Calendar CalendarData()
        {   var mydate = TheGetter();
            Calendar mycalendar = _context.calendar_table.Where(a=>a.dt == mydate ).SingleOrDefault();
            
            //var mydate1 = DateTime.Today.AddDays(-1);
            //Calendar mycalendar1 = _context.calendar_table.Where(b=>b.dt == mydate1).SingleOrDefault();

           
            return mycalendar;

            
        }

          //get the id corresponding to this week 
        [HttpGet("[action]")]
        
        public int[] TheWeek(){
            
            int[] weekdays = new int[7];
            var  datevar = TheGetter();
            Calendar mytoday = _context.calendar_table.Where(a=>a.dt == datevar).SingleOrDefault();

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
            User firstuser = _context.users.Where(User=>User.id == 2).SingleOrDefault();
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
            if(notes == null){
                mynotes[k]=" ";
            }
            else{mynotes[k]= notes.mynotes;}  
            }
            
            return mynotes;
        }

        [HttpGet("[action]")]
        public String[] JournalData()
        {
            int[] dailyjournals = TheWeek();
            String[] myjournals = new String[7];
            for(int k=0; k<dailyjournals.Length; k++){
                int test = dailyjournals[k];
            Journal journals = _context.journals.Where(a=>a.calendarid == test).SingleOrDefault();
            if(journals == null){
                myjournals[k]=" ";
            }
            else {myjournals[k]= journals.contents;}  
            }
            
            return myjournals;
        }

        [HttpPost("[action]")]  
        public IActionResult SaveJournal([FromBody] object[] data)  
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

        [HttpPost("[action]")]  
        public IActionResult SaveNotes([FromBody] object[] data)  
        {       
                
                bool isNew = false;
                Calendar something = _context.calendar_table.Where(p => p.dt == (DateTime)data[1] ).FirstOrDefault();
                Note plan2 = _context.notes.Where(k => k.calendarid == something.calendarid ).FirstOrDefault();
                if( plan2 == null){
                    plan2 = new Note();
                    isNew = true;
                }
                    plan2.mynotes = (string)data[0];
                    plan2.calendarid = something.calendarid;
                    plan2.users_id = 1;  
                    plan2.updated_at = DateTime.Now;  
                
                if (isNew){
                    plan2.created_at = DateTime.Now;
                   _context.notes.Add(plan2); 
                }
                 
                _context.SaveChanges();
                return Ok(plan2); 
            
        }

        [HttpGet("[action]")]
        public string Clear()
        {
            var hello = "hello";
            HttpContext.Session.Clear();
            Console.WriteLine("Hello world");
            return hello;
        } 

        [HttpPost("[action]")]  
        public IActionResult SaveNewEvent([FromBody] object[] data)  
        {       
                
                bool isNew = false;
                Calendar something = _context.calendar_table.Where(p => p.dt == (DateTime)data[0] ).FirstOrDefault();
                Agenda plan = _context.agendas.Where(k => k.id == something.calendarid ).FirstOrDefault();
                if( plan == null){
                    plan = new Agenda();
                    isNew = true;
                }
            
                    plan.title = data[1].ToString();
                    plan.description = data[2].ToString();
                    plan.category = data[3].ToString();
                    plan.start = Convert.ToDateTime(data[4]);
                    plan.end = Convert.ToDateTime(data[5]);
                    
                    plan.calendarid = something.calendarid;
                    plan.users_id = 2;  
                    plan.updated_at = DateTime.Now;  
                
                if (isNew){
                    plan.created_at = DateTime.Now;
                   _context.agendas.Add(plan); 
                }
                 
                _context.SaveChanges();
                return Ok(plan); 
            
        } 

        [HttpGet("[action]")]
        public List<Agenda>[] BuildAgenda()
        {
            int[] dailyevents = TheWeek();
            List<Agenda>[] myevents = new List<Agenda>[7];
            for(int k=0; k<dailyevents.Length; k++){
                int test = dailyevents[k];
            List<Agenda> agendas = _context.agendas.Where(a=>a.calendarid == test).ToList();
            
            
            myevents[k]= agendas;  
            }
            
            return myevents;
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
    public static class SessionExtensions
{
    // We can call ".SetObjectAsJson" just like our other session set methods, by passing a key and a value
    public static void SetObjectAsJson(this ISession session, string key, object value)
    {
        // This helper function simply serializes theobject to JSON and stores it as a string in session
        session.SetString(key, JsonConvert.SerializeObject(value));
    }
       
    // generic type T is a stand-in indicating that we need to specify the type on retrieval
    public static T GetObjectFromJson<T>(this ISession session, string key)
    {
        string value = session.GetString(key);
        // Upon retrieval the object is deserialized based on the type we specified
        return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
    }
}
}
