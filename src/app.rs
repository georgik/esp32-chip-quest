
use yew::prelude::*;

use crate::components::{ChipSelector, FormFactors, Chip, DevKit, Module, SoC};


#[function_component(App)]
pub fn app() -> Html {
    let chips = use_state(|| vec![
        Chip {
            name: "ESP32".into(),
            image: "images/esp32-generic.png".into(),
            features: vec!["RAM", "ETH", "WiFi", "PSRAM", "SD/MMC", "LCD", "Xtensa"],
            devkits: vec![
                DevKit {
                    name: "ESP32-DevKitC".into(),
                    image: "images/esp32-devkitc.jpg".into(),
                },
                // Add other devkits here
            ],
            modules: vec![
                // Define modules similarly
            ],
            socs: vec![
                // Define SoCs similarly
            ],
        },
        Chip {
            name: "ESP32-S3".into(),
            image: "images/esp32-generic.png".into(),
            features: vec!["RAM", "SPI-ETH", "WiFi", "PSRAM", "SD/MMC", "LCD", "Xtensa"],
            devkits: vec![
                DevKit {
                    name: "ESP32-S3-DevKitC".into(),
                    image: "images/esp32-s3-devkitc.jpg".into(),
                },
                // Add other devkits here
            ],
            modules: vec![
                // Define modules similarly
            ],
            socs: vec![
                // Define SoCs similarly
            ],
        },
        Chip {
            name: "ESP32-C6".into(),
            image: "images/esp32-generic.png".into(),
            features: vec!["RAM", "WiFi", "WiFi 6", "PSRAM", "SD/MMC", "LCD", "RISC-V"],
            devkits: vec![
                DevKit {
                    name: "ESP32-C6-DevKitC".into(),
                    image: "images/esp32-c3-devkitc.jpg".into(),
                },
                // Add other devkits here
            ],
            modules: vec![
                // Define modules similarly
            ],
            socs: vec![
                // Define SoCs similarly
            ],
        },
    ]);

    let current_chip_index = use_state(|| 0);

    let select_chip = {
        let current_chip_index = current_chip_index.clone();
        Callback::from(move |index: usize| current_chip_index.set(index))
    };

    let current_chip = (*chips).get(*current_chip_index).unwrap().clone();


    html! {
        <main>
            <div id="app">
                <h1>{"ESP32 Chip Selector"}</h1>
                <ChipSelector chips={(*chips).clone()} current_chip_index={*current_chip_index} on_select={select_chip} />
                <FormFactors devkits={current_chip.devkits.clone()} modules={current_chip.modules.clone()} socs={current_chip.socs.clone()} />
            </div>
        </main>
    }
}