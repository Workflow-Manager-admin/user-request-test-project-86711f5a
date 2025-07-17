#!/bin/bash
cd /home/kavia/workspace/code-generation/user-request-test-project-86711f5a/frontend_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

