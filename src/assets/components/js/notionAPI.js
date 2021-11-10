const { Client } = require("@notionhq/client")


export default function notionAPI() {


const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  })

  ;(async () => {
    const listUsersResponse = await notion.users.list()
    console.log(listUsersResponse)
  })()

}