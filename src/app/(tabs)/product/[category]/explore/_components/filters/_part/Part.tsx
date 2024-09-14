import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { ReactNode, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    background: "unset",
    borderBottom: "1px solid #eee",
    "&::before": {
        display: "none",
    },
}));

const CustomArrowIcon = styled(ArrowForwardIosSharpIcon)(({ theme }) => ({
    fontSize: "1rem",
    color: "#666",
    transition: "transform 3.3s ease-in-out",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<CustomArrowIcon />} {...props} />
))(({ theme }) => ({
    border: "none",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper": {
        transform: "rotate(90deg)",
        transition: "transform .6s",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(270deg)",
    },
    "& .MuiAccordionSummary-content": {
        padding: "0",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(0),
}));

interface Props {
    title: string;
    children: ReactNode[];
}

const Part = ({ title, children }: Props) => {
    const [expanded, setExpanded] = useState<string | false>("panel1");
    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) =>
            setExpanded(newExpanded ? panel : false);
    return (
        <>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                className="w-full"
            >
                <div className="py-1">
                    <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <div className="flex items-center gap-2 text-neutral-600 text-[.92rem]">
                            {title}
                        </div>
                    </AccordionSummary>
                    {children[0]}
                </div>
                <AccordionDetails>{children[1]}</AccordionDetails>
            </Accordion>
        </>
    );
};

export default Part;
