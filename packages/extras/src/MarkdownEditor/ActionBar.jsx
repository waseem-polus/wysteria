import {
	Bold,
	Code2,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Italic,
	Link,
	List,
	ListChecks,
	ListOrdered,
	Quote,
	Strikethrough,
	Underline,
} from "lucide-react";
import React from "react";
import "./ActionBar.css";

const wrapSelectionWith = (text, selStart, selEnd, openTag, closeTag) => {
	const preSelection = text.substring(0, selStart);
	const midSelection =
    selStart != selEnd ? text.substring(selStart, selEnd) : " ";
	const postSelection = text.substring(selEnd);

	return preSelection + openTag + midSelection + closeTag + postSelection;
};

const setSelection = (
	textarea,
	selStart,
	selEnd = selStart,
	startOffset = 0,
	endOffset = 0,
) => {
	setTimeout(() => {
		textarea.current.focus();
		textarea.current.setSelectionRange(
			selStart + startOffset,
			selEnd + endOffset,
		);
	}, 0);
};

const addToStartOfLine = ({ value, setValue, mdInput }, symbol) => {
	const cursorStart = mdInput.current.selectionStart;
	const SOL = findStartOfLine(value, cursorStart);

	setValue(value.substring(0, SOL) + symbol + value.substring(SOL));
};

const findStartOfLine = (string, position) => {
	let startOfLine = 0;

	for (let i = position; i >= 0; i--) {
		if (string[i] == "\n") {
			startOfLine = i + 1;
			break;
		}
	}

	return startOfLine;
};

export const ActionBar = (props) => {
	const iconSize = 20; // px
	const iconStroke = 1.5; // px

	const handleWrap = (openTag, closeTag = openTag) => {
		const start = props.mdInput.current.selectionStart;
		const end = props.mdInput.current.selectionEnd;

		props.setValue(
			wrapSelectionWith(props.value, start, end, openTag, closeTag),
		);

		setSelection(props.mdInput, start, end, openTag.length, openTag.length);
	};

	const handleHyperlink = () => {
		const endCursor = props.mdInput.current.selectionEnd;
		handleWrap("[", "](url)");

		setSelection(props.mdInput, endCursor, endCursor, 3, 6);
	};

	return (
		<span className="action-bar">
			<button
				className="icon-button"
				onClick={() => {
					handleWrap("**");
				}}
			>
				<Bold size={iconSize} strokeWidth={iconStroke}></Bold>
			</button>

			<button
				className="icon-button"
				onClick={() => {
					handleWrap("*");
				}}
			>
				<Italic size={iconSize} strokeWidth={iconStroke}></Italic>
			</button>

			<button
				className="icon-button"
				onClick={() => {
					handleWrap("<u>", "</u>");
				}}
			>
				<Underline size={iconSize} strokeWidth={iconStroke}></Underline>
			</button>

			<button
				className="icon-button"
				onClick={() => {
					handleWrap("~");
				}}
			>
				<Strikethrough size={iconSize} strokeWidth={iconStroke}></Strikethrough>
			</button>

			<span className="divider"></span>

			<button
				className="icon-button"
				onClick={() => {
					handleHyperlink(props);
				}}
			>
				<Link size={iconSize} strokeWidth={iconStroke}></Link>
			</button>

			<button
				className="icon-button"
				onClick={() => {
					handleWrap("``");
				}}
			>
				<Code2 size={iconSize} strokeWidth={iconStroke}></Code2>
			</button>

			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, " > ");
				}}
			>
				<Quote size={iconSize} strokeWidth={iconStroke}></Quote>
			</button>

			<span className="divider"></span>

			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "1. ");
				}}
			>
				<ListOrdered size={iconSize} strokeWidth={iconStroke}></ListOrdered>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, " - ");
				}}
			>
				<List size={iconSize} strokeWidth={iconStroke}></List>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, " - [ ] ");
				}}
			>
				<ListChecks size={iconSize} strokeWidth={iconStroke}></ListChecks>
			</button>

			<span className="divider"></span>

			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "# ");
				}}
			>
				<Heading1 size={iconSize} strokeWidth={iconStroke}></Heading1>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "## ");
				}}
			>
				<Heading2 size={iconSize} strokeWidth={iconStroke}></Heading2>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "### ");
				}}
			>
				<Heading3 size={iconSize} strokeWidth={iconStroke}></Heading3>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "#### ");
				}}
			>
				<Heading4 size={iconSize} strokeWidth={iconStroke}></Heading4>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "##### ");
				}}
			>
				<Heading5 size={iconSize} strokeWidth={iconStroke}></Heading5>
			</button>
			<button
				className="icon-button"
				onClick={() => {
					addToStartOfLine(props, "###### ");
				}}
			>
				<Heading6 size={iconSize} strokeWidth={iconStroke}></Heading6>
			</button>
		</span>
	);
};
