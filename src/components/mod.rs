use yew::prelude::*;

// Declare each component module that exists in the `components` folder
pub mod chip_selector;
pub mod form_factors;

// Re-export the components along with their props to make them easily accessible from other parts of the application
pub use chip_selector::{ChipSelector};
pub use form_factors::{FormFactors, DevKit, Module, SoC};

#[derive(Properties, PartialEq, Clone)]
pub struct Chip {
    pub name: String,
    pub image: String,
    pub features: Vec<&'static str>,
    pub devkits: Vec<DevKit>,
    pub modules: Vec<Module>,
    pub socs: Vec<SoC>,
}


#[derive(Properties, PartialEq, Clone)]
pub struct ChipSelectorProps {
    pub chips: Vec<Chip>,
    pub current_chip_index: usize,
    pub on_select: Callback<usize>,
}
