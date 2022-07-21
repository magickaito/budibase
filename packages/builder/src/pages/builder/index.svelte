<script>
  import { redirect } from "@roxi/routify"
  import { auth } from "stores/portal"

  auth.checkQueryString()

  $: {
    if ($auth.isBuilder || $auth.isAdmin) {
      $redirect(`./portal`)
    } else if ($auth.user) {
      $redirect(`./apps`)
    }
  }
</script>
