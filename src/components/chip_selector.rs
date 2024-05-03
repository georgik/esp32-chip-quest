use yew::prelude::*;

use crate::components::{Chip, ChipSelectorProps};

#[function_component(ChipSelector)]
pub fn chip_selector(props: &ChipSelectorProps) -> Html {
    html! {
        <div class="chip-selector">
            {for props.chips.iter().enumerate().map(|(index, chip)| {
                let on_select = props.on_select.clone();
                html! {
                    <div
                        key={index}
                        class="chip-box"
                        onclick={move |_| on_select.emit(index)}
                    >
                        <img src={chip.image.clone()} alt={chip.name.clone()} class="chip-image"/>
                        <div class="chip-name">{&chip.name}</div>
                    </div>
                }
            })}
        </div>
    }
}

