# NativeScript-Vue Application with some ultilities for starting a new app:

* Auth interceptor to redirect to login page when user is not authenticated
* Auto login and "keep me logged" option
* Http interceptor to create authenticated routes
* Loading indicator that start and stop with http requests
* Side Drawer menu as component with auto naming of views
* Font icon with filter
* Global mixin
* Centralized Router with lazy loading
* Centralized state manager with Vuex
* Login, register and home page pre built
* Toast notifications

## Usage

``` bash
# Install dependencies
npm install

# Build for production
npm run build
npm run build:<platform>

# Build, watch for changes and debug the application
npm run debug
npm run debug:<platform>

# Build, watch for changes and run the application
npm run watch
npm run watch:<platform>

# Clean the NativeScript application instance (i.e. rm -rf dist)
npm run clean
```

> When invoking the various npm scripts, omitting the platform will attempt to launch `tns` for both platforms, which will only work in a properly configured OSX environment.

For detailed instructions, see https://github.com/nativescript-vue/vue-cli-template