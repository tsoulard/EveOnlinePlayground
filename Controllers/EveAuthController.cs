using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

[ApiController]
public class EveAuthController : Controller
{
    private string requestUrl;
    private string redirectUrl;
    private string clientId;
    public EveAuthController()
    {
        requestUrl = "https://login.eveonline.com/oauth/token";
        clientId = "253a2a78c5434b3dae3c9d9002a3b537";
        redirectUrl = "http://localhost:50020/callback";
    }

    [HttpGet]
    [Route("api/eveAuth/GetLoginUrl")]
    public IActionResult GetLoginUrl()
    {
        var scopes = new List<string> { "publicData", "esi-assets.read_assets.v1", "esi-characters.read_standings.v1"};
        
        var loginUrl = $"https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri={redirectUrl}&client_id={clientId}&scope={string.Join(" ", scopes)}";
        //encode url or it wont work :(
        return Ok(loginUrl);
    }

    [HttpPost]
    [Route("api/eveAuth/RequestToken")]
    public async Task<IActionResult> RequestToken(TestRequest testRequest)
    {
        var requestBody = JsonConvert.SerializeObject(new
        {
            grant_type = "authorization_code",
            code = testRequest.token
        });

        var httpClient = new HttpClient();

        var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, requestUrl);
        httpRequestMessage.Headers.Add("Authorization", "Basic " + Base64Encode($"253a2a78c5434b3dae3c9d9002a3b537:W8nKVTLgBkcffpqQsgvUUDdEpJJKrihG6YMZ3yMl"));
        httpRequestMessage.Content = new StringContent(requestBody, Encoding.UTF8, "application/json");

        var result = await httpClient.SendAsync(httpRequestMessage);

        if (result.IsSuccessStatusCode)
        {
            var responseData = await result.Content.ReadAsStringAsync();
            return Ok(responseData);
        }

        return BadRequest();
    }


    private string Base64Encode(string text)
    {
        var textBytes = System.Text.Encoding.UTF8.GetBytes(text);
        return System.Convert.ToBase64String(textBytes);
    }
}

public class TestRequest
{
    public string token { get; set; }
}

