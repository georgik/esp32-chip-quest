use yew::prelude::*;

#[derive(Properties, PartialEq, Clone)]
pub struct DevKit {
    pub name: String,
    pub image: String,
}

#[derive(Properties, PartialEq, Clone)]
pub struct Module {
    pub name: String,
    pub image: String,
}

#[derive(Properties, PartialEq, Clone)]
pub struct SoC {
    pub name: String,
    pub image: String,
}

#[derive(Properties, PartialEq, Clone)]
pub struct FormFactorsProps {
    pub devkits: Vec<DevKit>,
    pub modules: Vec<Module>,
    pub socs: Vec<SoC>,
}

#[function_component(FormFactors)]
pub fn form_factors(props: &FormFactorsProps) -> Html {
    html! {
        <div class="form-factors">
            <div class="form-factor">
                <h2>{"DevKits"}</h2>
                <ul>
                    {for props.devkits.iter().map(|devkit| {
                        html! {
                            <li key={devkit.name.clone()}>
                                <img src={devkit.image.clone()} alt={devkit.name.clone()} />
                                <span>{&devkit.name}</span>
                            </li>
                        }
                    })}
                </ul>
            </div>
            <div class="form-factor">
                <h2>{"Modules"}</h2>
                <ul>
                    {for props.modules.iter().map(|module| {
                        html! {
                            <li key={module.name.clone()}>
                                <img src={module.image.clone()} alt={module.name.clone()} />
                                <span>{&module.name}</span>
                            </li>
                        }
                    })}
                </ul>
            </div>
            <div class="form-factor">
                <h2>{"Chips (SoC)"}</h2>
                <ul>
                    {for props.socs.iter().map(|soc| {
                        html! {
                            <li key={soc.name.clone()}>
                                <img src={soc.image.clone()} alt={soc.name.clone()} />
                                <span>{&soc.name}</span>
                            </li>
                        }
                    })}
                </ul>
            </div>
        </div>
    }
}
