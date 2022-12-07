*** Settings ***
Documentation    application-testing
Library    SeleniumLibrary

*** Test Cases ***
Testataan että sovellus toimii
    Open Browser    http://localhost:3000    Safari
    # Suurennetaan ikkuna
    Maximize Browser Window
Testataan renderöityykö headeri
    Wait Until Element Is Visible    id:root
Klikataan linkkiä
    Click Link    Projects
Etsitään sivulta sana Projects
    Wait Until Page Contains    Projects
Odotetaan hetki
    Sleep    3s
Suljetaan ohjelma
    Close Window