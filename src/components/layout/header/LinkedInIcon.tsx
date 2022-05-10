import React from 'react';

/**
    Component that shows an svg of a github icon.
*/

type LinkedInIconParams = {
    className?: string,
};

/* eslint-disable max-len */
export default function LinkedInIcon({ className }: LinkedInIconParams) {
    return (
        <svg
            version="1.1"
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 2500 2500"
            enableBackground="new 0 0 2500 2500"
            xmlSpace="preserve"
        >
            <path
                fill="#FFFFFF"
                d="M1250,0C559.6,0,0,559.6,0,1250s559.6,1250,1250,1250s1250-559.6,1250-1250C2500,559.6,1940.3,0,1250,0z
     M916.5,1854.3H642V967.6h274.4V1854.3z M778,851.5c-89.6,0-162.3-73.3-162.3-163.6c0-90.4,72.7-163.6,162.3-163.6
    s162.3,73.2,162.3,163.6C940.3,778.3,867.6,851.5,778,851.5z M1945,1854.3h-273.1v-465.4c0-127.7-48.5-198.9-149.4-198.9
    c-109.9,0-167.2,74.2-167.2,198.9v465.4H1092V967.6h263.2v119.4c0,0,79.2-146.5,267.2-146.5c188,0,322.6,114.8,322.6,352.3
    L1945,1854.3z"
            />
        </svg>
    );
}
