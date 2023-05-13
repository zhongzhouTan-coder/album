use gloo_utils::format::JsValueSerdeExt;
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use web_sys::{window, Element, HtmlElement};

#[derive(Serialize, Deserialize)]
pub struct Link {
    text: String,
    url: String,
}

impl Link {
    // Create a new link element
    pub fn new(&self) -> Result<HtmlElement, JsValue> {
        // create the <a> tag
        let a = window()
            .unwrap()
            .document()
            .unwrap()
            .create_element("a")?
            .dyn_into::<HtmlElement>()?;
        a.set_attribute("href", &self.url)?;
        a.set_text_content(Some(&self.text));

        Ok(a)
    }
}

// Define a function to create the navigation bar
pub fn create_nav(links: JsValue) -> Result<Element, JsValue> {
    // Create the <nav> and <ul> tags
    let top_nav = window()
        .unwrap()
        .document()
        .unwrap()
        .create_element("div")?
        .dyn_into::<Element>()?;
    top_nav.set_class_name("topNav");

    let links_array: Vec<Link> = links.into_serde().unwrap();
    // Add the links to the navigation bar
    for link in links_array.iter() {
        let element = link.new()?;
        top_nav.append_child(&element)?;
    }

    Ok(top_nav)
}
