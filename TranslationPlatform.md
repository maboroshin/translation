# Translation Platform Comparison for Open Source softwares

**Software Translation Platform** or **Software Localization Platform** is a tool to assist in the process of translating software for a large group of people. This is primarily an online tool. e.g. GitHub, Transifex, Wordpress.org. (**Update**: August 2023)

E-Mail is also often used to send translation files. For successful software localization. However, there is a growing shift to online tools dedicated to translation. Good communication, Announcement of activities, and use of existing platforms are important. The use of a translations editor software is also useful. e.g. POEdit, Qt-Linguist, IniTranslator.

Many are careful to protect personal information. Weblate continued to embed contributors' email addresses in GitHub commits until the end of 2022. That can now be stopped by the settings, but the information on GitHub will remain.

With the exception of Weblate, they have terms that prohibit personal attacks harassment. Weblate is easy to join.

## Statistics and Impressions
As a native Japanese, I have translated over a hundred applications. Many are open source.

**Good communications**

GitHub and E-mail are the major. GitHub and E-mail are always in communication. We can communicate with developers with icons. Most developers are friendly and jovial. This is one of the joys of GitHub. But On the Translation Platform, the developer basically does not know the translator. Developers should welcome translation contributors who encounter problems to come to GitHub to communicate. In this case, access control may be necessary.

The Code of Conduct is also available as open source. It has been forked into many projects to create successful projects and cooperative relationships.

**Announcement of activities**

The most common means is online platforms including GitHub. They provide a visualization of the participants' behavior. In the case of e-mail, it may be difficult to recognize another translator. On GitHub, you can see the update history of each code. Even if the project is not active, the e-mail is more difficult to understand. The developer may not check e-mail frequently. It is important to announce that the project has not been suspended. 

**Use of existing platforms**

The uTorrent project had a translation platform on its own site. This is not recommended because it increases password management. If I have a Github account, I can join other existing platforms right away.

I don't use Sourceforge because it is difficult to use. However, in most cases, the developer's e-mail address is publicly available. I send translation files to this address. Developers need to be able to reply quickly to emails containing words like Translation and Localize.

**Means of transmitting translation files**

Below is the means by which I sent the latest translation files. In some cases, developers have switched from WebTranslateIt to Crowdin. I counted it as a Crowdin. It is not the number of softwares, but the number of representative developers. Even if he develops 3 software, it counts as 1.

| Service | Total |
|:-----------|--------:|
| **GitHub**  | **17** |
| **E-Mail** <br>(Total of following) | **12** |
| E-Mail <br>(Website) \* | 8 |
| E-Mail <br>(Sourceforge) \* | 4 |
| **Translation Platform** <br>(Total of following) | **11** |
| Transifex | 5 |
| Weblate   | 3 |
| Crowdin   | 2 |
| Translation platform<br>on the developer's<br>own site | 1 |
| **Total** (October 2022) | **40** |

\* I saw the notice on the site and sent an e-mail to the developer. Or, I sent an e-mail to the developers at Sourceforge.

### Wordpress Plugins

I have translated over 20 plugins. Most Wordpress plugins are translated on the Wordpress.org's translation platform. 

**Use of existing platforms and announcement**

4 plugins, this translation was not reflected in the actual plugins. I think in some cases the old code was still on the platform. Others used translation files sent by e-mail or other means. In such cases, The plugin information page on Wordpress.org should state that it does not use Wordpress.org's translations. We should not contribute to a project that does not provide clear and understandable notices.

## Tools for translation file
Most translation files can be edited in a text editor. Translations editor has been developed for some file extensions. The use of shortcuts key is useful.

| File extention | Software | Memo |
|:-----------|--------|--------|
| `ini`  | [IniTranslator](https://portableapps.com/apps/development/initranslator-portable) |
| `resx` | IniTranslator |
| `ts` | Qt-Linguist | Compile to `qm` file 
| `po` | [POEdit](https://poedit.net/) | Compile to `mo` file

## Stats

| |Transifex|Crowdin|Weblate|
|:-:|:-:|:-:|:-:|
Place|USA|Estonia|Czech Republic
Projects|40,000<br>Nominal<br>([2018](https://www.transifex.com/about/))|[166K](https://crowdin.com/page/about-crowdin)<br>Nominal|1,164<br>Nominal|
Open project|[16,000](https://explore.transifex.com/)<br>Nominal|[16,869](https://crowdin.com/projects#advanced-search)<br>Actual|[987](https://hosted.weblate.org/projects/?page=10&limit=100)<br>Actual
Users|[0.5M](https://www.transifex.com/about/)<br>Nominal|[2.1M](https://crowdin.com/page/about-crowdin)<br>Nominal|[67,413](https://weblate.org/discover/)<br>Nominal
Team|[10 peples](https://www.transifex.com/about/)|[8 Peoples](https://crowdin.com/page/about-crowdin)|[3 Peoples](https://weblate.org/about/)
Eemployees| [84](https://www.linkedin.com/company/transifex)| [117](https://ee.linkedin.com/company/crowdin)|[4](https://www.linkedin.com/company/weblate)<br>+Contributors
Display of translation rate|Per peroject|Per peroject|1 page
Integrity<br>[Details](https://github.com/maboroshin/translation/wiki/UI)|1 page|1 page|Per string
Access control | Free| Free | Free |
Participation | approval | approval | anyone
Anti-Harassment Policy|[O](https://www.transifex.com/legal/terms/)|[O](https://support.crowdin.com/terms/)|[X](https://weblate.org/terms/)
Leakage of personal data| ? | ? | X |

* [Crowdin's Advanced Search](https://crowdin.com/projects#advanced-search) could be referenced up to page 563. It's 30 projects per page. 30*562+9=16869
* [Weblate's top page](https://weblate.org/) claims 2500 libre software projects. Weblate displays 1165 projects in HostedWeblate on [the explore page](https://weblate.org/ja/discover/). And [HostedWeblate](https://hosted.weblate.org/) shows 1164. However, 987 projects are actually available for display. There are over 350 projects on servers other than HostedWeblate.

* [Comparison of Translation Platform UI](https://github.com/maboroshin/translation/wiki/UI)

### Open source

Transifex was initially open source. Transifex stopped doing so in 2013. This has led some developers to migrate to Weblate. Because Weblate is open source. However, as shown below, this may not be related to improved translation quality.

## Privacy Issues

**Good case**

[Crowdin](https://crowdin.com/page/security) claims to be ISO certified and compliant with the EU General Data Protection Regulation (GDPR). And Recording of terminal movements, use the encryption, security systems.

[Transifex](https://www.transifex.com/legal/security/) claims on compliance with privacy laws, access control, encryption, and ISO certification of e-mail communications.

In 2019, I found someone's e-mail address on WebTranslateIt (Paidware). When I contacted WebTranslateIt, I received a friendly reply. After another day or so, I received an e-mail that resolved the problem. It said that the program had been improved so that the e-mail address would not be published. I was surprised at the good experience.

**Bad case**

[Weblate](https://bestpractices.coreinfrastructure.org/en/projects/552#security) claims that one or more developers has knowledge about how to designing secure software and vulnerabilities. : via [Security and privacy](https://docs.weblate.org/en/latest/contributing/security.html) (Weblate). Weblate encrypt and store passwords. Weblate claims to be GDPR compliant.

On the other hand, Weblate published user's e-mail addresses. This is more than 3 years after user request for nondisclosure. It is not in the code, it is embedded in the comments of each commit on GitHub. So I using a Weblate-only e-mail address. For example, search for the following search terms : `Weblate commit "Co-authored-by"` . You will see that someone's e-mail address are publicly available. We are lucky that most pages on GitHub are not cached. But You can discover by opening each commit on GitHub. It's not easy to keep it private for once published, because the e-mail address is passed to GitHub commits. This continued until the end of 2022.

[Weblate Legal Terms](https://hosted.weblate.org/legal/)
> Your name and e-mail address is used in VCS commits, it will stay there indefinitely.

[Weblate Terms and Privacy](https://weblate.org/en/terms/)
> Terms of Service 6.5. The User agrees to use of own name and e-mail as authorship in the VCS commits. The User understands that this grant is non revocable due to nature of the VCS.<br>
> Privacy Policy 2. Name and e-mail address : These are used to identify you in the VCS commits.

The user agrees to be used. However, There is no mention of the fact that anyone can view the personal information of VCS commits. This does not end with disclosure to the VCS system. It will be disclosed to all persons who have access to the public VCS.

In #3105 below, the right of deletion in the GDPR is not recognized in 2019. I'm surprised. In #6508 below, pappasadrian (user) is concerned about illegality. Again, he calls it the "leak".

* #3105: Make user's email addresses private by default (2019): https://github.com/WeblateOrg/weblate/issues/3105
* #6508: Allow personal email addresses to be ommitted in commits (Implemented on end of 2022, This means below) : https://github.com/WeblateOrg/weblate/issues/6508

At the end of 2022, Weblate finally reached the basic idea of making e-mails private by default.

* #8451: Allow instance owner to set a default template for commit e-mail, hiding user e-mails from commits by default (Implemented on end of 2022) https://github.com/WeblateOrg/weblate/issues/8451

## Access control
It concerns the developer stopping vandalism. They also have a reviewer system. Reviewers can approve translation suggestions.

- Wordpress.org Japan has a well-developed reviewer system. Translation guidelines are also available. Low quality translations will not be approved.
- Transifex: Generaly, The administrator approves participation. This system itself is an access control.
- [Crowdin Features](https://support.crowdin.com/features/), [User Management](https://support.crowdin.com/enterprise/user-management/) : In some projects, developers approve each suggestions. I doesn't experience a problem on Crowdin. So I don't know much about it.
- Weblate: [Access control](https://docs.weblate.org/en/latest/admin/access.html#access-control) : User blocks are available in mid-2021. Until then, there was no access control on the free Libre plan.

An issue was created in 2015. The block feature became available in 2021.

* Authorized translators (2015) : https://github.com/WeblateOrg/weblate/issues/779
* Provide way to deal with abusing users (2019) https://github.com/WeblateOrg/weblate/issues/3040

**Bad cace: failure to maintain translation quality** (Example before 2021)

A troll came to the translation platform Weblate. He keeps reverting to the wrong translation. However, Weblate's free plan allows neither access control nor a review system. Only Weblate has no code of conduct (below). Trolls can submit low quality translations many times.

In this case, the change history is increased. However Weblate only displays 10 logs including comments on each string page (** In the past). I need to open each string page to comment, It's dozen pages. Thus, Weblate is not suitable for wide-ranging discussion. When I tried to move the discussion to GitHub, the GitHub developers told me to go back to Weblate.

Thus for a long time, the Japanese translation of "About" remained the same "About". And, New contributors have registered broken Japanese. Developers cannot select experienced participants. Only the last edit will remain. If trolls are involved, the quality of the translation will be lowered.

( ** I have requested improvements to increase the number of logs. It has improved: https://github.com/WeblateOrg/weblate/issues/8254 )

## Code of Conduct for Translation Platforms
Code of Conduct relates to the suspension of vandalism. With the exception of Weblate, they have terms that prohibit personal attacks and harassment. The [Contributor Covenant](https://www.contributor-covenant.org/) has been deployed in over 100,000 open source projects. It advocates welcoming and constructive guideline for people to form cooperative relationships. It is also common in open source projects. [GNOME Code of Conduct
](https://wiki.gnome.org/Foundation/CodeOfConduct), [KDE Community Code of Conduct](https://kde.org/code-of-conduct/)

I find commonality below.

[GitHub Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)
> Working in a collaborative environment means disagreements may happen. But **remember to criticize ideas, not people**. Share thoughtful, constructive criticism and be courteous to those you interact with.

[GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service#c-acceptable-use)
> You agree that you will not under any circumstances violate our Acceptable Use Policies or **Community Guidelines**.
----
[Transifex Terms of Service](https://www.transifex.com/legal/terms/)
> You will not, and will not attempt to, misuse the Services, and will use the Services only in a manner consistent with the Transifex Accepted Use Policy.
> We may, but have no obligation to, remove your words or close an account containing your words that we determine in our sole discretion are
unlawful, **offensive, threatening, libelous, defamatory**, pornographic, obscene or **otherwise objectionable** or violates any party’s intellectual property or these Terms.

[Transifex Acceptable Use Policy](https://www.transifex.com/legal/acceptable-use/)

----
[Crowdin Terms and Conditions](https://support.crowdin.com/terms/) : 7.1?
>7.1: the Client and any of the Users associated with the Account do not create, transmit, display or make otherwise available any Client Data that violates the terms of these Terms, (in short) or is **harmful (in short), offensive, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, invasive of another’s privacy, hateful or otherwise unlawful**;
----
[WebTranslateIt Terms of Service](https://webtranslateit.com/tos) (Paidware)
>You may **not use the site to harass** other users.
----
[Weblate Terms of Service](https://weblate.org/terms/): ***No code of conduct can be found.***
>3.5: The User agrees to refrain from use of the Service in bad faith and/or deliberately causing any damage to the Service.

This seems like a close concept. The intent of the attack to others is unclear. There is an anti-spam system: https://github.com/WeblateOrg/weblate/issues/2284 . Prevention of unrelated translations: https://github.com/WeblateOrg/weblate/issues/3040 . However, no search is available for harassment.

### Transifex Community
This is the entire forum, the translation tool itself above.

[Transifex Community - Terms of Service](https://community.transifex.com/tos)
> the Content is not pornographic, **does not contain threats** or incite violence, and does not violate the privacy or publicity rights of any third party;
> 
[Transifex Community - Guidelines](https://community.transifex.com/faq#improve) (* This is not a Terms of Use. However each administrator can control access.)
> But **remember to criticize ideas, not people**.
> Please avoid: Ad hominem attacks; Responding to a post’s tone instead of its actual content
> **Don’t harass or grief anyone**, impersonate people, or expose their private information.
----
