import rss, { pagesGlobToRssItems } from "@astrojs/rss";

import { formatBlogPosts } from "../js/utils";

// const postImportResult = import.meta.glob("./blog/**/*.md", { eager: true });
// const posts = formatBlogPosts(Object.values(postImportResult));

export async function GET(context) {
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/**/*.md")),
  });
}
