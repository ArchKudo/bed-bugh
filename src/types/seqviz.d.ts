import type { SeqViz } from "seqviz";
import type { ComponentProps } from "react";

type SeqVizProps = ComponentProps<typeof SeqViz>;

export type ExternalSelection = NonNullable<SeqVizProps["selection"]>;
export type Selection = Parameters<NonNullable<SeqVizProps["onSelection"]>>[0];
