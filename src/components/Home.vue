<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Label class="fa" :text="'fa-glass' | fonticon" />
      <Label class="fa" :text="'fa-heart' | fonticon" />
      <Label class="fa" :text="'fa-user' | fonticon" />
    </StackLayout>

  </Page>
</template>
