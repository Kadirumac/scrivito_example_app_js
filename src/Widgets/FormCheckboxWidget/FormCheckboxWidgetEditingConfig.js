import * as Scrivito from "scrivito";
import formCheckboxWidgetIcon from "../../assets/images/form_checkbox_widget.svg";
import { isCustomType } from "../FormContainerWidget/utils/isCustomType";
import { customFieldNameValidation } from "../FormContainerWidget/utils/validations/customFieldNameValidation";
import { insideFormContainerValidation } from "../FormContainerWidget/utils/validations/insideFormContainerValidation";
import { typeValidation } from "../FormContainerWidget/utils/validations/typeValidation";

process.env.ENABLE_NEOLETTER_FORM_BUILDER &&
  Scrivito.provideEditingConfig("FormCheckboxWidget", {
    title: "Form Checkbox",
    thumbnail: formCheckboxWidgetIcon,
    attributes: {
      required: { title: "Mandatory" },
      type: {
        title: "Input type",
        values: [
          { value: "accept_terms", title: "Accept terms" },
          { value: "custom", title: "Custom" },
        ],
      },
      customFieldName: { title: "Field name" },
      helpText: { title: "Help text" },
    },
    properties: (widget) =>
      isCustomType(widget)
        ? ["type", "customFieldName", "label", "required", "helpText"]
        : ["type", "label", "required", "helpText"],
    initialContent: {
      type: "custom",
      customFieldName: "custom_checkbox",
      label: "Please send me your free printed product catalog.",
    },
    validations: [
      typeValidation,
      customFieldNameValidation,
      insideFormContainerValidation,
    ],
  });
