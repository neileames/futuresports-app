import React, { useState, useEffect, useCallback } from 'react';
import './Search.css';

function Search() {
    const [keyword, setKeyword] = useState('');
    const [currentOccurrenceIndex, setCurrentOccurrenceIndex] = useState(0);
    const [counter, setCounter] = useState(-1);

    const scrollToFirstOccurrence = useCallback(() => {
        setCurrentOccurrenceIndex(0);
        setCounter(-1);

        removeHighlight();

        if (keyword.length > 0) {
            const nodes = textNodesUnder();

            let newCounter = -1;
            nodes.forEach(node => {
                newCounter += highlightWords(node, keyword.toLowerCase(), newCounter);
            });

            if (newCounter > -1) {
                scrollToOccurrence();
                setCurrentOccurrenceIndex(currentOccurrenceIndex => currentOccurrenceIndex + 1);
            }
            setCounter(newCounter);
        }
    }, [keyword]);

    useEffect(() => {
        scrollToFirstOccurrence();
    }, [keyword, scrollToFirstOccurrence]);
    
    const scrollToNextOccurrence = () => {
        setCurrentOccurrenceIndex(currentOccurrenceIndex => currentOccurrenceIndex + 1);

        if (currentOccurrenceIndex > counter) {
            scrollToFirstOccurrence();
        }

        scrollToOccurrence();
    };
 
    const textNodesUnder = () => {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            {
                acceptNode(node) {
                    const nodeName = node.nodeName.toLowerCase();
                    if (['p', 'h2', 'h3', 'th', 'td', 'table'].includes(nodeName)) {
                        return NodeFilter.FILTER_ACCEPT;
                    } else {
                        return NodeFilter.FILTER_SKIP;
                    }
                }
            },
            false
        );

        const textNodes = [];
        while (walker.nextNode()) {
            const textWalker = document.createTreeWalker(
                walker.currentNode,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            while (textWalker.nextNode()) {
                textNodes.push(textWalker.currentNode);
            }
        }

        return textNodes;
    };

    const highlightWords = (node, word, counter) => {
        let match, pos = 0;

        let occurrences = 0;

        while ((match = node.nodeValue.toLowerCase().indexOf(word, pos)) > -1) {
            const before = node.splitText(match);
            const after = before.splitText(word.length);

            const span = document.createElement('span');
            span.id = `span${++counter}`;
            span.className = 'yellow';
            span.appendChild(before);

            after.parentNode.insertBefore(span, after);

            node = after;
            pos = 0;
            occurrences++;
        }

        return occurrences;
    };

    const getNearestParentId = (element) => {
        let parent = element.parentNode;
        while (parent) {
            if (parent.id !== '') {
                return parent.id;
            }
            parent = parent.parentNode;
        }
        return null;
    };

    const scrollToOccurrence = () => {
        if (currentOccurrenceIndex > 0) {
            const prevElement = document.getElementById(`span${currentOccurrenceIndex - 1}`);
            if (prevElement) prevElement.classList.remove('orange');
        }

        const targetElement = document.getElementById(`span${currentOccurrenceIndex}`);
        if (targetElement) {
            targetElement.classList.add('orange');

            const nearestParentId = getNearestParentId(targetElement);
            if (['profile1', 'profile2', 'profile3'].includes(nearestParentId)) {
                ['profile1', 'profile2', 'profile3'].forEach(profileId => {
                    document.getElementById(profileId).style.display = 'none';
                });

                const nearestParent = document.getElementById(nearestParentId);
                nearestParent.style.display = 'block';
            }

            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500);
        }
    };

    const removeHighlight = () => {
        document.querySelectorAll('.yellow').forEach(element => {
            element.outerHTML = element.innerHTML;
        });
        document.querySelectorAll('.orange').forEach(element => {
            element.outerHTML = element.innerHTML;
        });
    };

    const handleInputChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSearchButtonClick = () => {
        console.log('handleSearchButtonClick called');
        scrollToNextOccurrence();
    };

    const handleInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            scrollToNextOccurrence();
        }
    };

    return (
        <div id="search_container">
            <form id="search_form" onSubmit={(e) => e.preventDefault()}>
                <input type="search" id="keyword" placeholder="Search" value={keyword} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
                <button type="button" id="searchButton" onClick={handleSearchButtonClick}>&#x1F50D;&#xFE0E;</button>
            </form>
        </div>
    );
}

export default Search;
