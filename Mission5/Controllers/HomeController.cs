using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Mission5.Models;
// libraries/connection

namespace Mission5.Controllers;

public class HomeController : Controller
{
    public IActionResult Index() // index page
    {
        return View();
    }

    public IActionResult Services() // services page
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}