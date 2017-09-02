#!/bin/bash
CYAN="\033[1;36m"
LBLUE="\033[1;34m"
GREEN="\033[0;32m"
LPURPLE="\033[1;35m"
YELLOW="\033[1;33m"
GRAY="\033[1;30m"
DEFAULT="\033[0;0m"

echo -e "${CYAN}======================================"
echo -e "${GREEN}Running First Pull" 
echo -e "${CYAN}======================================"
echo -e "${DEFAULT}"

echo -e "${LBLUE}======================================"
echo -e "${GREEN}Starting composer install"
echo -e "${LBLUE}======================================"
echo -e "${DEFAULT}"

composer install

echo -e "${LBLUE}======================================"
echo -e "${GREEN}Finished composer install"
echo -e "${LBLUE}======================================"
echo -e "${DEFAULT}"

echo -e "${LPURPLE}======================================"
echo -e "${GREEN}Starting npm install"
echo -e "${LPURPLE}======================================"
echo -e "${DEFAULT}"

npm install

echo -e "${LPURPLE}======================================"
echo -e "${GREEN}Finished npm install"
echo -e "${LPURPLE}======================================"
echo -e "${DEFAULT}"

echo -e "${YELLOW}======================================"
echo -e "${GREEN}Making '.env' file"
echo -e "${YELLOW}======================================"
echo -e "${DEFAULT}"
cp .env.example .env

echo -e "${GRAY}======================================"
echo -e "${GREEN}Creating project key"
echo -e "${GRAY}======================================"
echo -e "${DEFAULT}"
# #Creates a key
php artisan key:generate

echo -e "${CYAN}======================================"
echo -e "${GREEN}Done running first pull setup!"
echo -e "${GREEN}Have a Great Day! :)"
echo -e "${CYAN}======================================"
echo -e "${DEFAULT}"