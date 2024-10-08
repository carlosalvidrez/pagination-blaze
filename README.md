carlosalvidrez:pagination-blaze
=================

Forked from Kurounin:Pagination-Blaze in order to make it compatible with Meteor 3.

This package provides a Bootstrap 5 Paginator Blaze template to be used with the [carlosalvidrez:pagination](https://atmospherejs.com/carlosalvidrez/pagination) package. It can also be configured to use custom styling.

# Usage
In the template helpers you need to define a helper to return the pagination instance and you can define an optional callback which should be called right before changing the page
```js
Template.myList.helpers({

    templatePagination: () => Template.instance().pagination,
    
    clickEvent: () => {
        return (e, templateInstance, clickedPage) => {
            e.preventDefault();
            console.log(
                'Changing page from ', 
                templateInstance.data.pagination.currentPage(), 
                ' to ', 
                clickedPage
            );
        };
    }    
    
});
```

In the template html file add the paginator
```html
{{> defaultBootstrapPaginator 
        pagination=templatePagination 
        onClick=clickEvent 
        limit=10 
        containerClass="text-center"
}}
```

For Semantic UI, use the following configuration
```html
{{> defaultBootstrapPaginator 
        pagination=templatePagination 
        onClick=clickEvent 
        limit=10 
        paginationClass="ui pagination menu" 
        itemClass="item" 
        wrapLinks=false
}}
```

Available template parameters are:
* `pagination`: pagination instance
* `limit`: the maximum number of page links to display
* `containerClass`: optional container class for the paginator
* `paginationClass`: optional class for the *ul* element (defaults to `pagination`)
* `itemClass`: optional class for the page links elements
* `wrapLinks`: if set to true page links will be wrapped in *li* elements (defaults to `true`)
* `onClick`: optional callback to be called when page link is clicked (default callback runs `e.preventDefault()`)

