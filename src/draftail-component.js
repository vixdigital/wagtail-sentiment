import PropTypes from 'prop-types';
import { ToolbarButton } from './lib';

const React = window.React;
const TOOLBAR_ICON = null;

/*
 * A control that displays sentiment analysis results for entered text.
 */
const ReadingLevel = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = null;
    
    if(!stats) {
        var message = ""
    }
    else {
        var message = "";
    }

    return (
        <ToolbarButton
            name="SENTIMENT_ANALYSIS"
            icon={TOOLBAR_ICON}
            label={`${message}`}
            onClick={() => {
                // on click functionality here
            }}
        />
    );
};

SentimentAnalysis.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default SentimentAnalysis;