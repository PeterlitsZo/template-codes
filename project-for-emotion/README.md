Project-for-emotion
===============================================================================

This is a runable project.

Run step:

- `yarn`.
- `yarn dev`.

After run, you will find that there is a text `FUCK` in red background. When you
press `F12` to open dev tool, you will find that there is a warper for it:

``` html
<div class="css-1pwy40v-App.Space">
  <div class="css-t1bhsm-App">FUCK.</div>
</div>
```

But the style in `header` is:
``` html
<style data-emotion="css" data-s="">
  .css-1pwy40v-App.Space {
    padding: 10px;
    background: green;
  }
</style>
```

It should be:
``` diff
 <style data-emotion="css" data-s="">
-  .css-1pwy40v-App.Space {
+  .css-1pwy40v-App\.Space {
     padding: 10px;
     background: green;
   }
 </style>
```
