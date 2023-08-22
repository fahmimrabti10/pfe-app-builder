import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "loading-layout"
declare module "C:/Users/T440S/Desktop/b/AppBulider/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}