use wasm_bindgen::prelude::*;

mod homepage;

#[wasm_bindgen(js_name = createNavJs)]
pub fn create_nav_js(links: JsValue) -> Result<web_sys::Element, JsValue> {
    homepage::navigation::create_nav(links)
}
