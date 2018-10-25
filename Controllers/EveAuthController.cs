using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

[Route("api/EveAuth")]
[ApiController]
public class EveAuthController : Controller
{
    private string requestUrl;
    public EveAuthController()
    {
        requestUrl = "https://login.eveonline.com/oauth/token";
    }
    public async Task<IActionResult> Post(TestRequest testRequest)
    {
        var requestBody = JsonConvert.SerializeObject(new
        {
            grant_type = "authorization_code",
            code = testRequest.token
        });

        var httpClient = new HttpClient();

        var x = httpClient.DefaultRequestHeaders;
        
        //https://developers.eveonline.com/blog/article/sso-to-authenticated-calls        

        var result = await httpClient.PostAsync(requestUrl, new StringContent(requestBody, Encoding.UTF8, "application/json"));

        if (result.IsSuccessStatusCode)
        {
            return Ok();
        }

        return BadRequest();
    }

}

public class TestRequest {
    public string token { get; set; }
}

