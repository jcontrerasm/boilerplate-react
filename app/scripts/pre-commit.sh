#!/bin/bash
cd ..
# exit if no files changed
if [ -n "$(git status --porcelain | grep '.tsx\?$')" ]; then
    cd app/
    echo "Initializing unit tests...";
    npm run lint && npm test
    RESULT=$?
    if [ $RESULT != 0 ]; then
        echo -e "\e[91m
     __________________________
    | Fix your fucking code..! |
    '--------------------------'
        \   ^__^
         \  (><)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
    "
        echo -e "\e[91mTests have failures. Commit rejected."
        cd ..
        exit 1
    else
        echo -e "\e[92m
         _____________
        | Good Job..! |
        '-------------'
                \   ^__^
                 \  (^^)\_______
                    (__)\       )\/\
                        ||----w |
                        ||     ||
        "
        cd ..
        exit 0
    fi;
    echo "salio"
    cd ..
    exit 0
fi;
echo "fin"
