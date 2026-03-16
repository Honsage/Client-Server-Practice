# Routing Practice

## Pages

### Home Page

*Route:* `/`

### About Page

*Route:* `/about`

### Catalog Page

*Route:* `/catalog`

Catalog is rendered with grid of BookCard components.

Component BookCard requires props with Book info:

```js
{
    id: number,
    name: string,
    author: string,
    description: string
}
```

Catalog does not pass and render description field.

### Book Page

*Route:* `/book/:id`

Parameter `id` is passed to page BookPage through hook useParams.

Page is rendered with component BookCard, passing full Book info.