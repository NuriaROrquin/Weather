export const colors = {
	borders: {
	},
	fonts: {
		white: `#FFFFFF` ,
	},
	background: {
		white: `#FFFFFF` ,
	},
	hover: {
	},
	disabled: {
		first: `#DDDDDD`,
	},
};

export const widths = {
	mobile: 320,
	phablet: 520,
	tablet: 768,
	tabletXL: 896,
	desktop: 992,
	laptop: 1024,
	wide: 1312
};

const unit = "px";

export const breakpoints = {
	mobile: `@media screen and (max-width: ${widths.mobile}${unit})`,
	phablet: `@media screen and (max-width: ${widths.phablet}${unit})`,
	tablet: `@media screen and (max-width: ${widths.tablet}${unit})`,
	tabletXL: `@media screen and (max-width: ${widths.tabletXL}${unit})`,
	desktop: `@media screen and (max-width: ${widths.desktop}${unit})`,
	laptop: `@media screen and (max-width: ${widths.laptop}${unit})`,
	wide: `@media screen and (max-width: ${widths.wide}${unit})`
};