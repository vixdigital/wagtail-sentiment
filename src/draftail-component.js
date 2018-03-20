import PropTypes from 'prop-types';
import { ToolbarButton } from './lib';
import sentiment from 'sentiment';

import React from 'react';
const TOOLBAR_ICON = null;

/*
 * A control that displays sentiment analysis results for entered text.
 */
const SentimentAnalysis = ({ getEditorState }) => {
    const editorState = getEditorState();
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const stats = sentiment(text);
    
    if(!stats) {
        var message = "Sentiment Score: N/A";
    }
    else {
        var message = "Sentiment Score: " + stats.score;
    }

    return (
        <ToolbarButton
            name="SENTIMENT_ANALYSIS"
            icon={TOOLBAR_ICON}
            label={`${message}`}
            onClick={() => {
                // on click functionality here
                console.log(stats);
            }}
        />
    );
};

SentimentAnalysis.propTypes = {
    getEditorState: PropTypes.func.isRequired,
};

export default SentimentAnalysis;