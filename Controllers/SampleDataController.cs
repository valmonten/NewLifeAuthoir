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
            return mycalendar;
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
