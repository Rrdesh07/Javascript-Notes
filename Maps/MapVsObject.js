// Map vs Object

/*
*   In javascript , you have two options: objects and maps,
*   and honestly, I still use objects more often than maps
*   just because the syntax is so simple. That said, there are
*   some advantages to using maps:
*
*   1.Ordered: Map keys are ordered in an easy-to-understand way.Objects are not.
*   2.Iterable: Maps are iterable, so you can use for...of loops on them. Objects are not(without some extra work)
*   3.Performance: Maps are typically faster when you need to do a lot of insertions and deletions.
*   4.No-extra properties: Map's don't have any extra built-in-properties like __proto__ or constructor that might you not want.
*
*   All this to say , in most cases either will work for your KV needs , but it's
*   important to understand some of the benefits of maps.
* */